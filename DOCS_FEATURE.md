# AI Document Assistant (Docs Page)

## Overview
The Docs page provides AI-powered document analysis features using Google's Gemini API. Users can paste any content and receive:
- AI-generated summaries
- Comprehension questions based on the content

## Features

### 1. Content Summarization
- Paste any text content (articles, notes, documents)
- Click "Generate Summary" to get a concise AI summary
- Copy summary to clipboard with one click

### 2. Question Generation
- Generate 5-7 thoughtful questions from your content
- Questions include different types:
  - Recall questions (basic facts)
  - Comprehension questions (understanding concepts)
  - Application questions (applying knowledge)
  - Analysis questions (deeper thinking)
- Copy all questions to clipboard

### 3. Focus Mode Integration
- Full Focus Mode support with screen time tracking
- Tab switch counting
- Fullscreen mode available

## Setup

### Environment Variables
Add your Gemini API key to `.env`:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Get Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env` file

## Usage

1. Navigate to **Docs** from the navigation menu
2. Paste your content in the left textarea
3. Click **Generate Summary** for an AI summary
4. Click **Generate Questions** for comprehension questions
5. Use the copy buttons to copy results to clipboard

## Files

- `src/pages/Docs.tsx` - Main Docs page component
- `src/lib/gemini-docs.ts` - Gemini API integration
- Translation keys: `docs` added to English and Hindi

## Features by Section

### Left Panel - Input
- Large textarea for content input
- Character counter
- Two action buttons (Summary & Questions)
- Loading states with spinners

### Right Panel - Output
#### Summary Card
- Shows AI-generated summary
- Copy to clipboard button
- Empty state placeholder

#### Questions Card
- Shows numbered questions (Q1, Q2, etc.)
- Each question in its own card
- Copy all questions button
- Animated appearance

## Technical Details

### Gemini Integration
- Model: `gemini-pro`
- Summary: Single concise paragraph
- Questions: 5-7 questions, filtered and formatted
- Error handling with user-friendly messages

### UI/UX
- Responsive grid layout (2 columns on large screens)
- Loading spinners during API calls
- Toast notifications for success/error states
- Copy confirmation with checkmark icon
- Empty state illustrations

## Navigation
Added to main navigation with:
- Icon: `BookText`
- Label: "Docs" (English) / "डॉक्स" (Hindi)
- Route: `/docs`
- Protected route (requires authentication)
