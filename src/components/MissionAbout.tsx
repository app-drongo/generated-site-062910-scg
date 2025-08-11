// Enhanced by AI on 2025-08-11T22:23:02.072Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Gem
} from "lucide-react"
import Link from "next/link"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Artisan Craftsmanship",
      description: "Every piece is handcrafted with love and attention to detail, ensuring unique jewelry that tells a story."
    },
    {
      icon: Gem,
      title: "Quality Materials",
      description: "We source only the finest sustainable materials, from ethically mined gemstones to recycled precious metals."
    },
    {
      icon: Lightbulb,
      title: "Unique Designs",
      description: "Our designs blend timeless elegance with contemporary flair, creating pieces that stand out and inspire."
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "From eco-friendly packaging to responsible sourcing, we're committed to jewelry that's beautiful inside and out."
    }
  ]

  const stats = [
    { value: "2003", label: "Established", icon: Award },
    { value: "500+", label: "Happy Customers", icon: Users },
    { value: "1000+", label: "Unique Pieces", icon: Gem },
    { value: "20+", label: "Years Experience", icon: TrendingUp }
  ]

  const team = [
    {
      name: "Elena Martinez",
      role: "Founder & Lead Designer",
      image: "EM",
      bio: "Master jeweler with 20+ years of experience and a passion for sustainable design."
    },
    {
      name: "Thomas Chen",
      role: "Artisan Craftsman", 
      image: "TC",
      bio: "Specializes in metalwork with a background in traditional jewelry techniques."
    },
    {
      name: "Sophia Williams",
      role: "Gemologist",
      image: "SW",
      bio: "Certified gemologist with expertise in sourcing ethical and unique stones."
    },
    {
      name: "James Rivera",
      role: "Workshop Manager",
      image: "JR",
      bio: "Oversees production and ensures every piece meets our quality standards."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Beauty with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Heart and Hands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of artisans dedicated to creating handcrafted jewelry 
            that celebrates individuality, sustainability, and timeless beauty.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2003 by Elena Martinez, our journey began in a small workshop 
                with a simple belief: jewelry should be as unique as the person wearing it.
              </p>
              <p>
                What started as a passion project has blossomed into a beloved brand, 
                where each piece is still handcrafted with the same care and attention as our very first creation.
              </p>
              <p>
                Today, we're proud to create sustainable, ethically-sourced jewelry that 
                brings joy to customers worldwide while honoring traditional craftsmanship.
              </p>
            </div>
            <Link href="/shop">
              <Button className="group">
                Explore Our Collections
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every piece of jewelry tells a story. Our mission is to help you tell yours."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Elena Martinez, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our craftsmanship and every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Artisans</h3>
            <p className="text-muted-foreground">
              The talented hands and creative minds behind every beautiful piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="outline" className="group">
                Connect With Our Team
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "The necklace I purchased is absolutely stunning. The craftsmanship is impeccable, 
                and I love knowing that it was made ethically and with such care."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  LM
                </div>
                <div className="text-left">
                  <div className="font-semibold">Laura Morgan</div>
                  <div className="text-sm text-muted-foreground">Loyal Customer Since 2015</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}