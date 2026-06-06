// placeholder
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DocsPage() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            REALME SMS GATE SETUP GUIDE
          </h1>

          <div className="space-y-8">

            <section>
              <h2 className="font-bold">
                1. Install SMS Gate APK
              </h2>
            </section>

            <section>
              <h2 className="font-bold">
                2. Grant Permissions
              </h2>

              <ul className="list-disc ml-6">
                <li>SMS</li>
                <li>Receive SMS</li>
                <li>Notifications</li>
                <li>Contacts</li>
                <li>Background Activity</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold">
                3. Auto Launch
              </h2>

              <p>
                Settings →
                Apps →
                Auto Launch →
                Enable SMS Gate
              </p>
            </section>

            <section>
              <h2 className="font-bold">
                4. Battery Optimization
              </h2>

              <p>
                Allow Background Activity
              </p>
            </section>

            <section>
              <h2 className="font-bold">
                5. Lock Application
              </h2>

              <p>
                Open Recent Apps →
                Swipe Down →
                Lock
              </p>
            </section>

            <section>
              <h2 className="font-bold">
                6. Enable Features
              </h2>

              <ul className="list-disc ml-6">
                <li>Local Server</li>
                <li>Cloud Server</li>
                <li>Webhook</li>
                <li>Start On Boot</li>
                <li>Auto Restart</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold">
                7. Webhook URL
              </h2>

              <pre className="bg-slate-900 p-4 rounded-xl">
https://yourdomain.com/api/sms
              </pre>
            </section>

            <section>
              <h2 className="font-bold">
                8. Testing
              </h2>

              <p>
                Send SMS →
                Check Inbox →
                Verify Dashboard Updates
              </p>
            </section>

          </div>

        </div>

      </main>

    </div>
  );
}