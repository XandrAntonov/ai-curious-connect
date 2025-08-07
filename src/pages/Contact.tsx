import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, MessageCircle, HelpCircle, Briefcase } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Zpráva byla odeslána! Ozveme se vám do 24 hodin.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "contact@aiinquisitive.net",
      description: "Napište nám kdykoliv"
    },
    {
      icon: <Phone className="h-6 w-6 text-success" />,
      title: "Telefon",
      content: "+420 777 123 456",
      description: "Po-Pá 9:00-17:00"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Adresa",
      content: "AI Inquisitive s.r.o.\nWenceslas Square 1\n110 00 Praha 1",
      description: "Česká republika"
    },
    {
      icon: <Clock className="h-6 w-6 text-success" />,
      title: "Otevírací doba",
      content: "Pondělí - Pátek\n9:00 - 17:00",
      description: "Víkendy na domluvě"
    }
  ];

  const faqItems = [
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      question: "Jak rychlo odpovídáte na dotazy?",
      answer: "Snažíme se odpovědět do 24 hodin v pracovní dny. Na urgentní dotazy odpovídáme i rychleji."
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-success" />,
      question: "Nabízíte individuální konzultace?",
      answer: "Ano, pro členy Premium a Enterprise komunity nabízíme 1-on-1 konzultace s našimi AI experty."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      question: "Spolupracujete s firmami?",
      answer: "Určitě! Nabízíme firemní školení, workshopy a konzultace pro implementaci AI v podnicích."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktujte nás
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Máte otázky o AI implementaci nebo se chcete připojit k naší komunitě? 
            Rádi vám pomůžeme najít správné řešení.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Napište nám</CardTitle>
                <CardDescription>
                  Vyplňte formulář a my se vám ozveme do 24 hodin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Jan Novák"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="jan@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Společnost</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Název vaší společnosti"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Předmět dotazu *</Label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Vyberte téma dotazu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="community">Přístup do komunity</SelectItem>
                        <SelectItem value="training">Firemní školení</SelectItem>
                        <SelectItem value="consulting">AI konzultace</SelectItem>
                        <SelectItem value="partnership">Partnerství</SelectItem>
                        <SelectItem value="technical">Technická podpora</SelectItem>
                        <SelectItem value="other">Jiné</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Popište váš dotaz nebo požadavek..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-primary">
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Kontaktní údaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-subtle rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{info.title}</h4>
                      <p className="text-sm text-foreground whitespace-pre-line">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Často kladené otázky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="p-1 bg-gradient-subtle rounded">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-gradient-subtle border-0">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Potřebujete urgentní pomoc?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pro členy Premium komunity nabízíme prioritní podporu
                  </p>
                  <Button variant="outline" size="sm">
                    Upgrade na Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="h-64 bg-gradient-subtle flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Naše pobočka v Praze</h3>
                <p className="text-muted-foreground">Wenceslas Square 1, 110 00 Praha 1</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};