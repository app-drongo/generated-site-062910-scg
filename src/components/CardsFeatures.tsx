// Enhanced by AI on 2025-08-11T22:20:50.070Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  ShieldCheck, 
  Package, 
  Globe, 
  Gift,
  Gem,
  Recycle,
  HeartHandshake,
  CreditCard
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Unique Designs",
      description: "Each piece is handcrafted with care, ensuring you receive a one-of-a-kind jewelry item.",
      badge: "Craftsmanship"
    },
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      description: "We use only premium metals and genuine gemstones in all our handmade jewelry pieces.",
      badge: "Quality"
    },
    {
      icon: Package,
      title: "Elegant Packaging",
      description: "Every purchase comes in beautiful gift-ready packaging perfect for special occasions.",
      badge: "Presentation"
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      description: "We deliver our handcrafted jewelry to customers around the world with care and tracking.",
      badge: "Shipping"
    },
    {
      icon: Gift,
      title: "Gift Options",
      description: "Add personalized notes and special gift wrapping for the perfect present.",
      badge: "Customization"
    },
    {
      icon: Gem,
      title: "Custom Orders",
      description: "Work with our artisans to create a bespoke piece designed specifically for you.",
      badge: "Personalization"
    },
    {
      icon: Recycle,
      title: "Sustainable Practices",
      description: "Eco-friendly materials and ethical sourcing are at the heart of our jewelry making.",
      badge: "Sustainability"
    },
    {
      icon: HeartHandshake,
      title: "Artisan Support",
      description: "Your purchase directly supports independent jewelry artists and their craft.",
      badge: "Community"
    },
    {
      icon: CreditCard,
      title: "Secure Checkout",
      description: "Shop with confidence using our encrypted payment system and buyer protection.",
      badge: "Security"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Commitment
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Beauty of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Handcrafted Jewelry
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover what makes our artisanal jewelry collection special and why our customers treasure each piece.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to discover our handcrafted collection?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Collection
            </Link>
            <Link href="/about" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Our Craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}