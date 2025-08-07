import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Cookies = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Zásady používání cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>Co jsou cookies</h2>
            <p>Cookies jsou malé textové soubory ukládané ve vašem prohlížeči pro zlepšení funkčnosti webu.</p>
            
            <h2>Jak cookies používáme</h2>
            <ul>
              <li>Nezbytné cookies pro fungování webu</li>
              <li>Analytické cookies pro sledování návštěvnosti</li>
              <li>Preferenční cookies pro personalizaci</li>
            </ul>
            
            <h2>Správa cookies</h2>
            <p>Cookies můžete spravovat v nastavení vašeho prohlížeče.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};