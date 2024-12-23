"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Your AI Assistant on Telegram
          </motion.h1>
          <motion.p
            className="text-xl md:text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Seamlessly manage Solana wallets, send SOL, deploy tokens, create
            bets, and more—right from your favorite messaging app.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="hover:pointer-events-none cursor-not-allowed opacity-50"
            >
              <Link href="https://t.me/YourBotUsername" className="font-bold">
                Currently Closed Beta
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-gradient-x"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            What Can Our AI Bot Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Manage Wallets"
              description="Easily create and manage Solana wallets for seamless transactions."
              icon="💼"
            />
            <FeatureCard
              title="Send SOL"
              description="Transfer SOL securely and efficiently to others on the Solana network."
              icon="💸"
            />
            <FeatureCard
              title="Deploy Tokens"
              description="Deploy custom tokens directly on the Solana blockchain with ease."
              icon="🪙"
            />
            <FeatureCard
              title="Create Bets"
              description="Set up and manage decentralized bets on the Solana blockchain."
              icon="🎲"
            />
            <FeatureCard
              title="Swap Tokens"
              description="Easily swap tokens on the Solana blockchain with fast and secure transactions."
              icon="🔄"
            />
            <FeatureCard
              title="Interact with Smart Contracts"
              description="Interact with Solana smart contracts for decentralized applications."
              icon="📜"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            About Our AI Agent
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/ai-assistant.svg"
                alt="AI Assistant"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4">
                Our AI agent is powered by cutting-edge technology and
                specialized to assist with Solana blockchain tasks. Here's what
                it can do:
              </p>
              <p className="text-lg mb-4">
                - Create new Solana wallets effortlessly.
                <br />
                - Send SOL to others securely and efficiently.
                <br />
                - Deploy tokens directly on the Solana blockchain.
                <br />- Set up and manage bets on Solana with ease.
              </p>
              <p className="text-lg">
                Experience the future of blockchain automation today!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <Button asChild size="lg">
            <Link href="mailto:contact@example.com">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            <span className="text-4xl mb-4">{icon}</span>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
