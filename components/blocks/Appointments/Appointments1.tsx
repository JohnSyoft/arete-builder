export const Appointments1 = () => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation with our experts. Choose your preferred time and service type.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-4">Select Date & Time</h3>

            {/* Mini Calendar */}
            <div className="bg-background p-4 rounded-lg border border-border mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">December 2024</h4>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded border border-border flex items-center justify-center">←</button>
                  <button className="w-8 h-8 rounded border border-border flex items-center justify-center">→</button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                <div className="p-2 text-muted-foreground">S</div>
                <div className="p-2 text-muted-foreground">M</div>
                <div className="p-2 text-muted-foreground">T</div>
                <div className="p-2 text-muted-foreground">W</div>
                <div className="p-2 text-muted-foreground">T</div>
                <div className="p-2 text-muted-foreground">F</div>
                <div className="p-2 text-muted-foreground">S</div>

                <div className="p-2">1</div>
                <div className="p-2">2</div>
                <div className="p-2">3</div>
                <div className="p-2">4</div>
                <div className="p-2">5</div>
                <div className="p-2">6</div>
                <div className="p-2">7</div>

                <div className="p-2">8</div>
                <div className="p-2">9</div>
                <div className="p-2">10</div>
                <div className="p-2">11</div>
                <div className="p-2">12</div>
                <div className="p-2">13</div>
                <div className="p-2">14</div>

                <div className="p-2 bg-primary text-primary-foreground rounded">15</div>
                <div className="p-2">16</div>
                <div className="p-2">17</div>
                <div className="p-2">18</div>
                <div className="p-2">19</div>
                <div className="p-2">20</div>
                <div className="p-2">21</div>
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h4 className="font-medium mb-3">Available Times</h4>
              <div className="grid grid-cols-3 gap-2">
                <button className="p-2 text-sm border border-border rounded hover:bg-muted/50 transition-colors">
                  9:00 AM
                </button>
                <button className="p-2 text-sm border border-border rounded hover:bg-muted/50 transition-colors">
                  10:00 AM
                </button>
                <button className="p-2 text-sm border border-border rounded hover:bg-muted/50 transition-colors">
                  11:00 AM
                </button>
                <button className="p-2 text-sm bg-primary text-primary-foreground rounded">2:00 PM</button>
                <button className="p-2 text-sm border border-border rounded hover:bg-muted/50 transition-colors">
                  3:00 PM
                </button>
                <button className="p-2 text-sm border border-border rounded hover:bg-muted/50 transition-colors">
                  4:00 PM
                </button>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-4">Your Information</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>Consultation</option>
                  <option>Strategy Session</option>
                  <option>Technical Review</option>
                  <option>Follow-up Meeting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg bg-background h-24 resize-none"
                  placeholder="Any specific topics you'd like to discuss..."
                ></textarea>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
