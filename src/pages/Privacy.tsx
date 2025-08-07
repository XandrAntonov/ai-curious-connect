import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Privacy = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Ochrana osobních údajů</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>Tato stránka popisuje, jak AI Inquisitive s.r.o. zpracovává vaše osobní údaje v souladu s GDPR.</p>
            
            <h2>Správce údajů</h2>
            <p>AI Inquisitive s.r.o., Wenceslas Square 1, 110 00 Praha 1, Česká republika</p>
            
            <h2>Jaké údaje sbíráme</h2>
            <ul>
              <li>Email pro newslettery a přístup do komunity</li>
              <li>Jméno a kontaktní údaje z formulářů</li>
              <li>Cookies pro zlepšení uživatelské zkušenosti</li>
            </ul>
            
            <h2>Vaše práva</h2>
            <p>Máte právo na přístup, opravu, výmaz a přenositelnost vašich údajů. Kontaktujte nás na contact@aiinquisitive.net</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};