import { useGamification } from '@/hooks/useGamification';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Coins, 
  Shield, 
  Sparkles, 
  Star, 
  Flame,
  Moon,
  Palette,
  BookOpen,
  Brain,
  Crown,
  Lock,
  Check
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const iconMap: { [key: string]: any } = {
  Shield,
  Sparkles,
  Star,
  Flame,
  Moon,
  Palette,
  BookOpen,
  Brain,
  Crown,
};

export default function Rewards() {
  const { stats, rewards, userRewards, purchaseReward, loading } = useGamification();
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName] || Gift;
    return <Icon className="h-6 w-6" />;
  };

  const isOwned = (rewardId: string) => {
    return userRewards.some(ur => ur.reward_id === rewardId);
  };

  const canAfford = (cost: number) => {
    return stats ? stats.total_points >= cost : false;
  };

  const handlePurchase = async (rewardId: string, cost: number) => {
    await purchaseReward(rewardId, cost);
  };

  const getRewardsByCategory = (category: string) => {
    return rewards.filter(r => r.category === category);
  };

  const categories = [
    { id: 'all', name: t.allRewards, icon: Gift },
    { id: 'avatar', name: t.avatarBorders, icon: Shield },
    { id: 'badge', name: t.profileBadges, icon: Star },
    { id: 'theme', name: t.themes, icon: Palette },
    { id: 'title', name: t.titles, icon: Crown },
  ];

  const translateCategory = (catId: string) => {
    switch (catId) {
      case 'all':
        return t.allRewards;
      case 'avatar':
        return t.avatarBorders;
      case 'badge':
        return t.profileBadges;
      case 'theme':
        return t.themes;
      case 'title':
        return t.titles;
      default:
        return catId;
    }
  };

  const localize = (reward: any, field: 'name' | 'description') => {
    // Try several translation key patterns: nested `rewards.code.name`, flat `reward_<code>_name`, or `rewards.<id>.<field>`
    const code = reward.code || reward.id;
    const candidates = [
      `rewards.${code}.${field}`,
      `reward_${code}_${field}`,
      `rewards.${reward.id}.${field}`,
    ];

    for (const key of candidates) {
      if (t[key]) return t[key];
    }

    return reward[field] || '';
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Gift className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">{t.rewardsShop}</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              {t.spendPointsOnRewards}
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Coins className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.yourBalance}</p>
                  <p className="text-2xl font-bold">
                    {stats?.total_points.toLocaleString() || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <p className="col-span-full text-center py-8 text-muted-foreground">
                    {t.loadingRewards}
                  </p>
                ) : (
                  (category.id === 'all' ? rewards : getRewardsByCategory(category.id)).map(
                    (reward, index) => {
                      const owned = isOwned(reward.id);
                      const affordable = canAfford(reward.cost);

                      return (
                        <motion.div
                          key={reward.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card
                            className={`relative overflow-hidden transition-all hover:shadow-lg ${
                              owned ? 'border-primary/50 bg-primary/5' : ''
                            }`}
                          >
                            {owned && (
                              <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-2">
                                <Check className="h-4 w-4" />
                              </div>
                            )}

                            <CardHeader>
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 rounded-lg bg-primary/10">
                                  {getIcon(reward.icon)}
                                </div>
                                <Badge variant="outline" className="capitalize">
                                  {translateCategory(reward.category)}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl">{localize(reward, 'name')}</CardTitle>
                              <CardDescription>{localize(reward, 'description')}</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Coins className="h-5 w-5 text-primary" />
                                  <span className="text-2xl font-bold">
                                    {reward.cost.toLocaleString()}
                                  </span>
                                </div>

                                {owned ? (
                                  <Badge className="bg-primary">{t.owned}</Badge>
                                ) : (
                                  <Button
                                    onClick={() => handlePurchase(reward.id, reward.cost)}
                                    disabled={!affordable || owned}
                                    className="gap-2"
                                  >
                                    {affordable ? (
                                      <>
                                        <Gift className="h-4 w-4" />
                                        {t.purchase}
                                      </>
                                    ) : (
                                      <>
                                        <Lock className="h-4 w-4" />
                                        {t.locked}
                                      </>
                                    )}
                                  </Button>
                                )}
                              </div>

                              {!owned && !affordable && (
                                <p className="text-sm text-muted-foreground text-center">
                                  {t.needMorePoints.replace('{count}', (reward.cost - (stats?.total_points || 0)).toLocaleString())}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    }
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Your Rewards Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              {t.yourRewardsCollection}
            </CardTitle>
            <CardDescription>{t.rewardsYouveUnlocked}</CardDescription>
          </CardHeader>
          <CardContent>
            {userRewards.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">
                {t.noRewardsYet}
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {userRewards.map((userReward, index) => (
                  <motion.div
                    key={userReward.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg border bg-card text-center gap-2"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      {getIcon(userReward.reward.icon)}
                    </div>
                    <p className="font-semibold text-sm">{localize(userReward.reward, 'name')}</p>
                    <Badge variant="outline" className="text-xs capitalize">
                      {translateCategory(userReward.reward.category)}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
