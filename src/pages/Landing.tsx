import { Link } from 'react-router-dom';
import { Shield, BarChart3, Map, Radio, ArrowRight, Flame, TreePine, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-forest.jpg';

const features = [
  {
    icon: Flame,
    title: 'AI Fire Risk Prediction',
    desc: 'Multi-class classification with real-time probability scoring and AI-generated explanations.',
  },
  {
    icon: Map,
    title: 'Interactive Map View',
    desc: 'Live sensor markers with color-coded risk levels across forest regions of India.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & History',
    desc: 'Track prediction accuracy, view trends, and analyze historical fire risk data.',
  },
  {
    icon: Radio,
    title: 'IoT Sensor Network',
    desc: 'Monitor temperature, humidity, smoke, CO₂, and more from distributed sensors.',
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Flame className="w-4.5 h-4.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">GreenGuard <span className="text-primary">FireWatch</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/auth?tab=signup">
              <Button size="sm">Get Started <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Aerial view of a lush green forest with a winding river"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.08] tracking-tight mb-6">
              Protecting Forests.<br />
              <span className="text-primary">Predicting Fires.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
              AI-powered real-time forest fire detection and prevention using IoT sensor networks. Because every forest saved is a future preserved.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 mb-10 text-primary-foreground/60 italic text-sm">
              "The Earth does not belong to us. We belong to the Earth." — Chief Seattle
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <Link to="/dashboard">
                <Button size="lg" className="text-base px-8">
                  Open Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30  bg-primary-foreground/60 hover:bg-primary-foreground/10">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to <span className="text-primary">Guard Our Forests</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive monitoring platform combining AI prediction, IoT sensors, and real-time alerting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center rounded-3xl bg-primary/5 border border-primary/20 p-12 md:p-16">
          <Leaf className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join GreenGuard FireWatch and help protect India's forests with cutting-edge AI and IoT technology.
          </p>
          <Link to="/auth?tab=signup">
            <Button size="lg" className="text-base px-10">
              Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-primary" />
            <span>GreenGuard FireWatch — Hack For Green Bharat</span>
          </div>
          <p>Built with 💚 for environmental sustainability</p>
        </div>
      </footer>
    </div>
  );
}
