import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Terms = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Obchodní podmínky</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>1. Úvodní ustanovení</h2>
            <p>Tyto obchodní podmínky upravují využívání služeb AI Inquisitive s.r.o.</p>
            
            <h2>2. Služby</h2>
            <p>Poskytujeme vzdělávací obsah, přístup do komunity a konzultační služby v oblasti AI.</p>
            
            <h2>3. Platby a refundace</h2>
            <p>Předplatné se účtuje měsíčně. Refundace je možná do 14 dnů od nákupu.</p>
            
            <h2>4. Kontakt</h2>
            <p>Pro otázky nás kontaktujte na contact@aiinquisitive.net</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};