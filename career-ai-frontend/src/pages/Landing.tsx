import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BrainCircuit, 
  Target, 
  BookOpen, 
  TrendingUp,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react'

const Landing = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Assessment",
      description: "Our advanced AI analyzes your skills, interests, and personality to provide personalized career recommendations."
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Get matched with careers that align perfectly with your unique profile and career goals."
    },
    {
      icon: BookOpen,
      title: "1000+ Career Paths",
      description: "Explore detailed information about thousands of career options across various industries."
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Access salary data, job growth projections, and industry trends to make informed decisions."
    }
  ]

  const stats = [
    { value: "2M+", label: "Users Transformed" },
    { value: "95%", label: "Success Rate" },
    { value: "1000+", label: "Career Paths" },
    { value: "50K+", label: "Companies Hiring" }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content: "Career AI helped me transition from marketing to product management. The assessment was incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist at DataCo",
      content: "The AI recommendations opened my eyes to career paths I never considered. Now I'm in my dream job!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UX Designer at Creative Studio",
      content: "The detailed career insights and skill development paths were exactly what I needed to advance my career.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-emerald-50/30"></div>
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Tech Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Tech Image Container */}
                <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {/* AI/Brain Visualization */}
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-48 sm:h-48 relative">
                        {/* Neural Network Visualization */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                            <BrainCircuit className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                          </div>
                        </div>
                        {/* Orbiting Nodes */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-5 sm:h-5 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-5 sm:h-5 bg-green-300 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-300 rounded-full animate-pulse animation-delay-3000"></div>
                        
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                          <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="#10b981" strokeWidth="1" opacity="0.3" />
                          <line x1="50%" y1="50%" x2="90%" y2="10%" stroke="#10b981" strokeWidth="1" opacity="0.3" />
                          <line x1="50%" y1="50%" x2="10%" y2="90%" stroke="#10b981" strokeWidth="1" opacity="0.3" />
                          <line x1="50%" y1="50%" x2="90%" y2="90%" stroke="#10b981" strokeWidth="1" opacity="0.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Decorative Dots */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <div className="flex flex-col gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Career Discovery
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-black">Discover Your Perfect</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Career Path
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                Let our advanced AI analyze your unique skills, interests, and personality to match you with the perfect career opportunities. Transform your future with data-driven insights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              >
                <Link
                  to="/register"
                  className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 text-center"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1000+ Careers</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Powered by Advanced AI
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Our cutting-edge AI technology ensures you get the most accurate and personalized career recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                How Career AI Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Get personalized career recommendations in three simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: "1", title: "Take Assessment", description: "Complete our comprehensive AI-powered assessment" },
              { step: "2", title: "Get Matches", description: "Receive personalized career recommendations" },
              { step: "3", title: "Take Action", description: "Follow your personalized career development plan" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Join thousands of professionals who transformed their careers with Career AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-slate-100">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 px-4">
              Join millions of professionals who have found their perfect career match with Career AI.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-base sm:text-lg font-semibold text-slate-100">Career AI</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm sm:text-base">
              &copy; 2024 Career AI. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-slate-400">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
