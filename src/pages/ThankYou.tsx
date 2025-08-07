import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Share2, MessageCircle } from "lucide-react";

export const ThankYou = () => {
  const handleShare = (platform: string) => {
    const text = "Právě jsem se připojil k AI Inquisitive komunitě! Připoj se také a nauč se využívat AI ve své práci.";
    const url = "https://aiinquisitive.net";
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-subtle">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6 shadow-success">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Děkujeme za přihlášení!
          </h1>
          <p className="text-muted-foreground text-lg">
            Váš email byl úspěšně zaregistrován. Brzy se vám ozveme s dalšími informacemi.
          </p>
        </div>

        {/* Next Steps */}
        <Card className="mb-8 text-left">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Co bude následovat?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Uvítací email</h3>
                  <p className="text-sm text-muted-foreground">
                    Do 5 minut vám pošleme uvítací email s dalšími informacemi
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Přístup do komunity</h3>
                  <p className="text-sm text-muted-foreground">
                    Během 24 hodin vám zašleme přístupové údaje do uzavřené komunity
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-medium">První kroky</h3>
                  <p className="text-sm text-muted-foreground">
                    Začněte prozkoumávat exkluzivní obsah a spojte se s ostatními členy
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Preview */}
        <Card className="mb-8 bg-gradient-primary border-0">
          <CardContent className="pt-6 text-white">
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Připojte se k diskuzi</h3>
            <p className="mb-4 text-white/90">
              Mezitím co čekáte na přístup, můžete si prohlédnout naše veřejné články a případové studie.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/blog">
                Číst blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Share Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <Share2 className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Podělte se s přáteli</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Pomozte svým kolegům objevit sílu AI v jejich práci
            </p>
            <div className="flex justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="text-blue-400 border-blue-400 hover:bg-blue-50"
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="text-blue-700 border-blue-700 hover:bg-blue-50"
              >
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/">
              Zpět na hlavní stránku
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-primary">
            <Link to="/o-nas">
              Zjistit více o nás
              <Users className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Contact Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Máte otázky? Kontaktujte nás na{" "}
            <a href="mailto:contact@aiinquisitive.net" className="text-primary hover:underline">
              contact@aiinquisitive.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};