// Enhanced by AI on 2025-08-11T22:21:20.416Z
// Section: cta
// Category: cta

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Award, Gem } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  const stats = [
    { value: "1000+", label: "Unique Pieces", icon: Gem },
    { value: "100%", label: "Handcrafted", icon: Award },
    { value: "500+", label: "Happy Customers", icon: Heart },
    { value: "20+", label: "Years Experience", icon: Sparkles }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                <Sparkles className="size-4 mr-2" />
                New Collection Available
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Discover Your Perfect
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Handcrafted Jewelry
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Each piece tells a unique story, crafted with love and attention to detail.
                Explore our collection of artisanal jewelry made to last a lifetime.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button size="lg" className="group text-base px-8 py-4" asChild>
                  <Link href="/shop">
                    Shop Collection
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-4" asChild>
                  <Link href="/about">
                    Our Craftsmanship
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  Featured in leading fashion and design publications
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Publication logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
                <Gem className="size-6 text-green-500" />
              </div>
              <h3 className="font-semibold">Ethically Sourced</h3>
              <p className="text-sm text-muted-foreground">
                All materials are responsibly and ethically sourced
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-3">
                <Award className="size-6 text-blue-500" />
              </div>
              <h3 className="font-semibold">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                Lifetime warranty on all our handcrafted pieces
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-3">
                <Heart className="size-6 text-purple-500" />
              </div>
              <h3 className="font-semibold">Custom Designs</h3>
              <p className="text-sm text-muted-foreground">
                Create your own unique piece with our custom design service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}