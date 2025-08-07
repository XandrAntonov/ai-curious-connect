import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BlogPost = () => {
  const { slug } = useParams();

  const mockPost = {
    title: "Jak marketingová agentura zvýšila ROI o 38% pomocí AI analytiky",
    content: "Podrobný obsah článku o implementaci AI nástrojů...",
    category: "Marketing",
    date: "15. prosince 2024",
    readTime: "8 min"
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na blog
          </Link>
        </Button>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4 mb-4">
              <Badge>{mockPost.category}</Badge>
              <div className="flex items-center text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {mockPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {mockPost.readTime}
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl">{mockPost.title}</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>Článek se načítá... (slug: {slug})</p>
            <p>{mockPost.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};