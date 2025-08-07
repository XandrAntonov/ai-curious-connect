import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Brain, Target, Users, TrendingUp, Award, CheckCircle } from "lucide-react";

export const About = () => {
  const achievements = [
    "Více než 1000 absolventů našich kurzů",
    "95% účastníků úspěšně implementovalo AI do své práce",
    "Průměrné zvýšení produktivity o 35%",
    "Spolupráce s 50+ českými firmami",
    "4.9/5 hodnocení od našich studentů"
  ];

  const team = [
    {
      name: "Dr. Petr Novák",
      role: "Zakladatel & Lead AI Strategist",
      description: "15 let zkušeností v oblasti AI a strojového učení. Bývalý výzkumník na ČVUT a konzultant pro Fortune 500 společnosti.",
      expertise: ["Machine Learning", "AI Strategy", "Deep Learning"]
    },
    {
      name: "Ing. Marie Svobodová",
      role: "Head of Education",
      description: "Specialistka na vzdělávání dospělých s fokusem na technologie. 10 let vedení vzdělávacích programů v tech sektoru.",
      expertise: ["Pedagogika", "Curriculum Design", "EdTech"]
    },
    {
      name: "Tomáš Dvořák",
      role: "Community Manager",
      description: "Expert na budování technologických komunit. Organizátor největších AI meetupů v České republice.",
      expertise: ["Community Building", "Event Management", "Networking"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-success/10 text-success border-success/20">
            O naší misi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformujeme kariéry pomocí AI
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AI Inquisitive vzniklo z přesvědčení, že umělá inteligence není jen technologický trend, 
            ale klíčová dovednost budoucnosti. Naším cílem je udělat AI přístupnou každému odborníkovi.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 bg-gradient-subtle border-0">
            <CardHeader className="text-center pb-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Naše mise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Demokratizovat přístup k AI vzděláání a pomoci odborníkům z různých oborů 
                integrovat umělou inteligenci do jejich každodenní práce způsobem, 
                který je praktický, etický a efektivní.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-success border-0">
            <CardHeader className="text-center pb-6">
              <Brain className="h-12 w-12 text-white mx-auto mb-4" />
              <CardTitle className="text-2xl text-white">Naše vize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 text-center">
                Vidíme budoucnost, kde každý odborník rozumí AI a dokáže ji využít 
                k řešení složitých problémů, zvýšení kreativity a dosažení lepších výsledků 
                ve své oblasti expertízy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Čeho jsme dosáhli</h2>
            <p className="text-muted-foreground text-lg">
              Naše výsledky mluví za nás
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
                  <p className="text-sm font-medium">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Náš tým</h2>
            <p className="text-muted-foreground text-lg">
              Experti s vášní pro AI a vzdělávání
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proč si vybrat AI Inquisitive?</h2>
            <p className="text-muted-foreground text-lg">
              Co nás odlišuje od ostatních
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Praktický přístup</h3>
                <p className="text-muted-foreground text-sm">
                  Zaměřujeme se na reálné případy použití, ne jen teorii
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aktivní komunita</h3>
                <p className="text-muted-foreground text-sm">
                  Přístup k síti odborníků a pokračující podpoře
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aktuální obsah</h3>
                <p className="text-muted-foreground text-sm">
                  Pravidelně aktualizujeme materiály podle nejnovějších trendů
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Český kontext</h3>
                <p className="text-muted-foreground text-sm">
                  Specializujeme se na české podnikatelské prostředí
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-primary p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Připojte se k naší misi
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Staňte se součástí komunity, která formuje budoucnost práce s umělou inteligencí v České republice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/komunita">
                Připojit se ke komunitě
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/kontakt">
                Kontaktovat nás
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};