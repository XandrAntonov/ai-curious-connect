import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Brain, Lightbulb, Target, Users, ArrowRight, Sparkles, TrendingUp, Shield, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Děkujeme za přihlášení! Brzy se ozveme s dalšími informacemi.");
      setEmail("");
    }
  };

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Praktické AI dovednosti",
      description: "Naučte se implementovat AI nástroje přímo do vašich pracovních procesů"
    },
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Exkluzivní komunita",
      description: "Připojte se k síti odborníků, kteří sdílejí své zkušenosti s AI"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Reálné případové studie",
      description: "Získejte přístup k analýzám úspěšných AI implementací"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: "Rostoucí kariéra",
      description: "Posílit svou pozici na trhu práce pomocí AI kompetencí"
    }
  ];

  const blogPosts = [
    {
      title: "Jak marketingová agentura zvýšila ROI o 38% pomocí AI analytiky",
      excerpt: "Podrobný rozbor implementace AI nástrojů pro analýzu dat a optimalizaci kampaní",
      category: "Marketing",
      readTime: "8 min",
      slug: "marketing-ai-roi-38-procent"
    },
    {
      title: "Implementace GPT modelů v právní praxi: případová studie",
      excerpt: "Jak advokátní kancelář automatizovala právní výzkum a zvýšila produktivitu",
      category: "Právnictví",
      readTime: "12 min",
      slug: "gpt-modely-pravni-praxe"
    },
    {
      title: "AI v HR: automatizace výběru zaměstnanců a snížení chybovosti",
      excerpt: "Využití umělé inteligence pro screening životopisů a předběžné rozhovory",
      category: "Lidské zdroje",
      readTime: "6 min",
      slug: "ai-hr-automatizace-vyberu"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Sparkles className="h-4 w-4 mr-2" />
            Připoj se k nám. Komunita s více než 1000 členy
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ovládni AI. Připoj se ke komunitě 
            <span className="text-success-light"> inovátorů</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Naučte se prakticky aplikovat umělou inteligenci ve svém oboru. 
            Získejte přístup k exkluzivním materiálům, případovým studiím a komunitě odborníků.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Váš email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Připojit se
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-white/70 text-sm">
            Bezplatný přístup k základním materiálům. Premium obsah od 299 Kč/měsíc.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proč si vybrat AI Inquisitive?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Získejte konkurenční výhodu díky praktickým AI dovednostem a podpoře komunity odborníků
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-subtle rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nejnovější články
            </h2>
            <p className="text-muted-foreground text-lg">
              Praktické příklady a případové studie úspěšné integrace AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary-hover font-medium inline-flex items-center group"
                  >
                    Číst článek
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                Zobrazit všechny články
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto w-fit p-4 bg-white/10 rounded-full">
            <Shield className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Začněte svou AI transformaci ještě dnes
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Připojte se k více než 1000 odborníkům, kteří už využívají AI k růstu svých kariér. 
            Získejte přístup k exkluzivním materiálům a komunitě.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/komunita">
                Připojit se ke komunitě
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/blog">
                Prohlédnout blog
                <Lightbulb className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};