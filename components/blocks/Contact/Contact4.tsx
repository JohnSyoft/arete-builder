export const Contact4 = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-foreground text-background p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-background/80">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-background/80">
                    24/7 online support available
                    <br />
                    Response time: Within 2 hours
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <span className="text-sm">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <span className="text-sm">t</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <span className="text-sm">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                    <option>Select Service</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Consulting</option>
                    <option>Support</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
