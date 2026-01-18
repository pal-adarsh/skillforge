import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Copy, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  GitBranch,
  Network,
  Share2,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface MermaidFlowchartProps {
  code: string;
  title?: string;
  onRefresh?: () => void;
  isLoading?: boolean;
}

export function MermaidFlowchart({ code, title, onRefresh, isLoading }: MermaidFlowchartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [svg, setSvg] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    const renderMermaid = async () => {
      if (!code || !containerRef.current) return;

      try {
        // Dynamically import mermaid
        const mermaid = (await import('mermaid')).default;
        
        // Detect if user prefers dark mode
        const isDarkMode = document.documentElement.classList.contains('dark') ||
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: isDarkMode ? 'dark' : 'default',
          securityLevel: 'loose',
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
          },
          themeVariables: isDarkMode ? {
            primaryColor: '#7c3aed',
            primaryTextColor: '#fff',
            primaryBorderColor: '#5b21b6',
            lineColor: '#6366f1',
            secondaryColor: '#1e1b4b',
            tertiaryColor: '#312e81',
          } : {
            primaryColor: '#7c3aed',
            primaryTextColor: '#000',
            primaryBorderColor: '#5b21b6',
            lineColor: '#6366f1',
            secondaryColor: '#e0e7ff',
            tertiaryColor: '#c7d2fe',
          },
        });

        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${Date.now()}`,
          code
        );
        
        setSvg(renderedSvg);
        setError(null);
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError(err instanceof Error ? err.message : 'Failed to render diagram');
        setSvg('');
      }
    };

    renderMermaid();
  }, [code]);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: 'Copied!',
      description: 'Mermaid code copied to clipboard',
    });
  };

  const handleDownloadSvg = () => {
    if (!svg) return;
    
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'flowchart'}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = async () => {
    if (!svg || !containerRef.current) return;

    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      ctx.scale(2, 2);
      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `${title || 'flowchart'}.png`;
      a.click();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <GitBranch className="h-5 w-5 text-primary" />
            {title || 'Flowchart'}
          </CardTitle>
          
          <div className="flex items-center gap-2">
            {onRefresh && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onRefresh}
                disabled={isLoading}
              >
                <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
              </Button>
            )}
            
            <div className="flex items-center gap-1 border rounded-lg px-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => setZoom(z => Math.max(0.25, z - 0.25))}
              >
                <ZoomOut className="h-3 w-3" />
              </Button>
              <span className="text-xs w-12 text-center">{Math.round(zoom * 100)}%</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => setZoom(z => Math.min(3, z + 0.25))}
              >
                <ZoomIn className="h-3 w-3" />
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" onClick={handleCopyCode}>
              <Copy className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={handleDownloadSvg}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {error ? (
          <div className="p-8 text-center">
            <div className="text-destructive mb-2">Failed to render diagram</div>
            <div className="text-sm text-muted-foreground">{error}</div>
            <pre className="mt-4 p-4 bg-muted rounded-lg text-xs text-left overflow-auto max-h-48">
              {code}
            </pre>
          </div>
        ) : (
          <div className="relative overflow-auto">
            <motion.div
              ref={containerRef}
              style={{ 
                transform: `scale(${zoom})`,
                transformOrigin: 'top left',
              }}
              className="min-h-[200px] flex items-center justify-center p-4"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        )}
        
        {/* Mermaid Code Preview */}
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
            View Mermaid Code
          </summary>
          <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto max-h-48">
            {code}
          </pre>
        </details>
      </CardContent>
    </Card>
  );
}

// Mini flowchart for page navigation visualization
interface PageFlowchartProps {
  pages: Array<{
    id: string;
    title: string;
    parentId: string | null;
    icon?: string;
  }>;
  onSelectPage: (id: string) => void;
  currentPageId?: string;
}

export function PageNavigationFlowchart({ pages, onSelectPage, currentPageId }: PageFlowchartProps) {
  const [mermaidCode, setMermaidCode] = useState<string>('');

  useEffect(() => {
    // Generate Mermaid code for page structure
    let code = 'flowchart TD\n';
    
    // Add root node
    code += '    ROOT[📚 All Pages]\n';
    
    // Add page nodes and connections
    pages.forEach(page => {
      const nodeId = `P${page.id.slice(0, 8)}`;
      const parentNodeId = page.parentId ? `P${page.parentId.slice(0, 8)}` : 'ROOT';
      const icon = page.icon || '📄';
      const title = page.title.length > 20 ? page.title.slice(0, 17) + '...' : page.title;
      
      code += `    ${nodeId}["${icon} ${title}"]\n`;
      code += `    ${parentNodeId} --> ${nodeId}\n`;
    });
    
    // Add click handlers (these won't work directly but show structure)
    setMermaidCode(code);
  }, [pages]);

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Network className="h-5 w-5 text-primary" />
          Page Structure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MermaidFlowchart code={mermaidCode} title="Page Navigation" />
        
        {/* Interactive list as fallback */}
        <div className="mt-4 space-y-1">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.id)}
              className={cn(
                "w-full flex items-center gap-2 p-2 rounded-lg text-left text-sm transition-colors",
                currentPageId === page.id 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted"
              )}
              style={{ marginLeft: page.parentId ? '1rem' : '0' }}
            >
              <span>{page.icon || '📄'}</span>
              <span className="truncate">{page.title || 'Untitled'}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
