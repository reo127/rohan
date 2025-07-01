import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Chrome, Shield, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-6">
          {/* Brand Logo */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Headlines */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Subscribe to My Newsletter</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get weekly insights, exclusive content, and industry updates delivered straight to your inbox.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Sign-up Options */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-11 border-gray-200 hover:bg-gray-50 transition-colors bg-transparent"
            >
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full h-11 border-gray-200 hover:bg-gray-50 transition-colors bg-transparent"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-500 uppercase tracking-wide">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Subscribe Now
            </Button>
          </form>

          {/* Additional Links */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our{" "}
              <Link href="/terms" className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
            <Link href="/help" className="text-xs text-gray-500 hover:text-gray-700 underline underline-offset-2 block">
              Need help? Contact support
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>We respect your privacy</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 mt-2">
              <div className="flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>Secure & encrypted</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>Join 10,000+ subscribers</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
