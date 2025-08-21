export const Integration1 = () => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Connect your favorite tools and services with our powerful integration platform. Streamline your workflow and
          boost productivity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Integration Card 1 */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Slack</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get real-time notifications and updates directly in your Slack channels.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Connect Slack
            </button>
          </div>

          {/* Integration Card 2 */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Google Drive</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sync files and documents automatically with your Google Drive storage.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Connect Drive
            </button>
          </div>

          {/* Integration Card 3 */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Zapier</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Automate workflows with 5000+ apps through Zapier integration.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Connect Zapier
            </button>
          </div>
        </div>

        {/* API Section */}
        <div className="bg-muted/30 p-8 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Developer API</h3>
          <p className="text-muted-foreground mb-6">
            Build custom integrations with our RESTful API. Full documentation and SDKs available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View Documentation
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors">
              Get API Key
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
