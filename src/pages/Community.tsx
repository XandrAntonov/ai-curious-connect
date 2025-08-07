import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Users, MessageCircle, BookOpen, Briefcase, Star, CheckCircle, Crown, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Community = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Děkujeme! Brzy vás kontaktujeme s dalšími informacemi o přístupu do komunity.");
      navigate("/dekujeme");
    }
  };

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Exkluzivní diskuze",
      description: "Přístup k uzavřeným diskuzím s AI experty a industry leaders"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-success" />,
      title: "Premium obsah",
      description: "Podrobné case studies, šablony a návody nedostupné veřejně"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Pracovní příležitosti",
      description: "Exkluzivní pracovní nabídky od firem hledajících AI specialisty"
    },
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Networking events",
      description: "Pravidelné online i offline meetupy pouze pro členy komunity"
    }
  ];

  const testimonials = [
    {
      name: "Jana Nováková",
      role: "Marketing Manager, TechCorp",
      text: "Díky AI Inquisitive komunitě jsem implementovala chatboty do naší zákaznické podpory. ROI se zvýšil o 42% během 3 měsíců.",
      rating: 5
    },
    {
      name: "Pavel Svoboda",
      role: "HR Director, InnovateCZ",
      text: "Komunita mi pomohla automatizovat screening kandidátů. Ušetřil jsem 15 hodin týdně a kvaliatu výběru se zlepšila.",
      rating: 5
    },
    {
      name: "Markéta Procházková",
      role: "CEO, DataSolutions",
      text: "Networking v komunitě vedl ke spolupráci na 3 velkých AI projektech. Investice se vrátila už první měsíc.",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Základní",
      price: "Zdarma",
      description: "Pro začátečníky",
      features: [
        "Přístup k veřejným článkům",
        "Základní newslettery",
        "Participace v diskuzích",
        "Měsíční webináře"
      ],
      cta: "Začít zdarma",
      popular: false
    },
    {
      name: "Premium",
      price: "299 Kč/měsíc",
      description: "Pro profesionály",
      features: [
        "Všechno ze Základního",
        "Premium case studies",
        "Prioritní podpora",
        "Týdenní Q&A sessions",
        "Přístup k AI tools databázi",
        "Networking events"
      ],
      cta: "Upgrade na Premium",
      popular: true
    },
    {
      name: "Enterprise",
      price: "899 Kč/měsíc",
      description: "Pro týmy a firmy",
      features: [
        "Všechno z Premium",
        "Přímý přístup k expertům",
        "Customizované workshopy",
        "1-on-1 konzultace",
        "Implementační podpora",
        "Kompletní AI audit"
      ],
      cta: "Kontaktovat prodej",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Users className="h-4 w-4 mr-2" />
            Exkluzivní komunita
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Připojte se k <span className="text-primary">1000+</span> AI odborníků
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Získejte přístup k uzavřené komunitě, kde najdete premium obsah, exkluzivní case studies, 
            pracovní příležitosti a přímý kontakt s AI experty.
          </p>
        </div>

        {/* What's Inside */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Co najdete v komunitě</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-subtle rounded-full w-fit group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Co říkají naši členové</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vyberte si svůj plán</h2>
            <p className="text-muted-foreground text-lg">
              Začněte zdarma nebo rovnou přejděte na premium přístup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'border-primary shadow-primary scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Crown className="h-4 w-4 mr-1" />
                      Nejpopulárnější
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Form */}
        <div className="bg-gradient-primary p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Připojte se ještě dnes
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Začněte svou AI transformaci s podporou naší komunity. Zadejte svůj email a my vás kontaktujeme 
            s dalšími informacemi o přístupu.
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Váš email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                required
              />
              <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold whitespace-nowrap">
                Připojit se
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Odesláním souhlasíte s našimi{" "}
              <Link to="/podminky" className="underline hover:text-white">
                obchodními podmínkami
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};