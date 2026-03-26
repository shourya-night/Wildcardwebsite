import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const coreFeatures = [
  'Smart Digital ID Card',
  'RFID Attendance System',
  'RFID Security System',
  'GPS Tracking',
  'QR Digital Profile',
  'Progress Reports',
  'Alerts System',
  'Wild Card Station'
];

const grades = [
  'Grade 1: RFID + GPS + Alert ID',
  'Grade 2: Adds Digital Profile + Progress Report + Keypad',
  'Grade 3: Adds ESP Cam',
  'Grade 4: Adds Fire Alert Speakers + Advanced Security'
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 px-6 py-10 md:px-16">
      <header className="mx-auto mb-16 flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold">Wild Card</h1>
        <ThemeToggle />
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs">WILD CARD by SMART IDEA</p>
          <h2 className="mb-4 text-5xl font-extrabold leading-tight">Smart Security. Smart Attendance. Smart Schools.</h2>
          <p className="mb-6 text-muted-foreground">A complete Smart Security Pulse Attendance System with RFID, GPS, LoRa alerts, digital identity, and intelligent stations for schools.</p>
          <Link href="/auth/login"><Button size="lg">Get Started</Button></Link>
        </div>
        <Card className="p-6 shadow-glow">
          <h3 className="mb-4 text-xl font-semibold">Wild Card Station</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• RFID Attendance + RFID Security</li>
            <li>• Cameras + Fire Alert auto-door unlock</li>
            <li>• Keypad backup if RFID fails</li>
            <li>• LoRa distance and danger alerts</li>
          </ul>
        </Card>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h3 className="mb-6 text-2xl font-semibold">Core Features</h3>
        <div className="grid gap-4 md:grid-cols-4">
          {coreFeatures.map((feature) => <Card key={feature} className="p-4 text-sm">{feature}</Card>)}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h3 className="mb-6 text-2xl font-semibold">How It Works</h3>
        <ol className="grid gap-4 md:grid-cols-5">
          {['Student scans ID at station', 'Attendance auto-updates website', 'GPS + LoRa tracking', 'Parent receives alerts', 'Teacher accesses digital profile'].map((step) => (
            <Card key={step} className="p-4 text-sm">{step}</Card>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h3 className="mb-6 text-2xl font-semibold">Grade System</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {grades.map((grade) => <Card key={grade} className="p-4">{grade}</Card>)}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-3 text-xl font-semibold">Broader Vision</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>RFID Library system</li><li>RFID Cafeteria Payment</li><li>Smart RFID Lockers</li><li>Noise detection system (Uurja)</li><li>Facial Recognition (future)</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="mb-3 text-xl font-semibold">About Smart Idea</h3>
          <p className="text-sm text-muted-foreground">Founder: Shourya Sharma<br/>Co-Founders: Soneesh Tomer, Navedya Singh<br/>Positioned from the ATL innovation community.</p>
        </Card>
      </section>

      <section className="mx-auto mt-20 max-w-6xl rounded-xl border border-border p-6">
        <h3 className="mb-2 text-xl font-semibold">Contact</h3>
        <p className="text-sm text-muted-foreground">Email: hello@smartidea-wildcard.com • Campus Security Partnerships Welcome</p>
      </section>
    </main>
  );
}
