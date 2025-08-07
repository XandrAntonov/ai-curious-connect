import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, Users, Zap, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Úspěšně jste se přihlásili!");
      navigate("/dekujeme");
    }, 1000);
  };

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Exkluzivní AI tutoriály",
      description: "Praktické návody na implementaci AI do vašich procesů"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Přístup do komunity",
      description: "Discord server s experty a dalšími profesionály"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Týdenní case studies",
      description: "Reálné příklady úspěšného využití AI v českých firmách"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Newsletter s novinkami",
      description: "Nejnovější trendy a nástroje v oblasti AI každý týden"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Připojte se k AI revoluci
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Získejte přístup k exkluzivním materiálům, komunitě expertů a praktickým nástrojům 
              pro implementaci AI do vašeho podnikání.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Co získáte:
              </h2>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Form */}
            <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">
                  Začněte ještě dnes
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Zadejte svou emailovou adresu a získejte okamžitý přístup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Emailová adresa
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vas@email.cz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Přihlašuji..." : "Získat přístup zdarma"}
                  </Button>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Žádné spamové zprávy, kdykoli se můžete odhlásit</span>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Nebo se připojte přímo:
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary">
                        Discord
                      </Button>
                      <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary">
                        Telegram
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};