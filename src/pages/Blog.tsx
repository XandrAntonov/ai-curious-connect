import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, ArrowRight, Clock } from "lucide-react";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      title: "Jak marketingová agentura zvýšila ROI o 38% pomocí AI analytiky",
      excerpt: "Podrobný rozbor implementace AI nástrojů pro analýzu dat a optimalizaci kampaní v českém marketingovém prostředí.",
      content: "V této případové studii se podíváme na to, jak pražská marketingová agentura Digital Pioneers implementovala AI analytické nástroje...",
      category: "Marketing",
      readTime: "8 min",
      slug: "marketing-ai-roi-38-procent",
      date: "15. prosince 2024",
      featured: true
    },
    {
      title: "Implementace GPT modelů v právní praxi: případová studie",
      excerpt: "Jak advokátní kancelář automatizovala právní výzkum a zvýšila produktivitu o 45% při zachování kvality služeb.",
      content: "Brněnská advokátní kancelář Procházka & Partners se rozhodla integrovat GPT modely do svých pracovních procesů...",
      category: "Právnictví",
      readTime: "12 min",
      slug: "gpt-modely-pravni-praxe",
      date: "12. prosince 2024",
      featured: true
    },
    {
      title: "AI v HR: automatizace výběru zaměstnanců a snížení chybovosti",
      excerpt: "Využití umělé inteligence pro screening životopisů a předběžné rozhovory v českých firmách.",
      content: "HR oddělení společnosti TechCorp implementovalo AI nástroje pro automatizaci náboru zaměstnanců...",
      category: "Lidské zdroje",
      readTime: "6 min",
      slug: "ai-hr-automatizace-vyberu",
      date: "10. prosince 2024",
      featured: false
    },
    {
      title: "Továrna budoucnosti: průmyslová AI ve výrobě a logistice",
      excerpt: "Jak česká výrobní společnost transformovala své procesy pomocí prediktivní analytiky a automatizace.",
      content: "Výrobní závod v Ostravě implementoval komplexní AI systém pro optimalizaci výrobních procesů...",
      category: "Průmysl",
      readTime: "10 min",
      slug: "tovarna-budoucnosti-prumyslova-ai",
      date: "8. prosince 2024",
      featured: false
    },
    {
      title: "Redakce na steroidech: jak noviny integrovali AI do práce novinářů",
      excerpt: "Případová studie implementace AI nástrojů v českém mediálním prostředí pro zvýšení efektivity a kvality obsahu.",
      content: "Redakce deníku Český rozhlas Plus začala experimentovat s AI nástroji pro podporu novinářské práce...",
      category: "Média",
      readTime: "7 min",
      slug: "redakce-na-steroidech-ai-novinarstvi",
      date: "5. prosince 2024",
      featured: false
    }
  ];

  const categories = ["Všechny", "Marketing", "Právnictví", "Lidské zdroje", "Průmysl", "Média"];
  const [selectedCategory, setSelectedCategory] = useState("Všechny");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Všechny" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Blog & Případové studie
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Praktické příklady a podrobné analýzy úspěšné integrace umělé inteligence v českých firmách
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Hledat články..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {searchTerm === "" && selectedCategory === "Všechny" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Doporučené články</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">
                      {post.excerpt}
                    </CardDescription>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary-hover font-medium inline-flex items-center group"
                    >
                      Číst celý článek
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            {searchTerm || selectedCategory !== "Všechny" ? "Výsledky vyhledávání" : "Všechny články"}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenašli jsme žádné články odpovídající vašemu hledání.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Všechny");
                }}
                className="mt-4"
              >
                Zobrazit všechny články
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory !== "Všechny" ? filteredPosts : regularPosts).map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
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
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary-hover font-medium inline-flex items-center group"
                      >
                        Číst více
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-subtle p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Chcete získat přístup k exkluzivním materiálům?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Připojte se k naší komunitě a získejte přístup k podrobným případovým studiím, 
            šablonám a diskuzím s odborníky na AI.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-primary">
            <Link to="/komunita">
              Připojit se ke komunitě
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};