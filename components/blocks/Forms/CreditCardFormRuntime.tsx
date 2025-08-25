import { CreditCard } from "lucide-react"

export interface CreditCardFormRuntimeProps {
  disabled?: boolean
  compact?: boolean
  className?: string
}

export function CreditCardFormRuntime({
  disabled = false,
  compact = false,
  className = ""
}: CreditCardFormRuntimeProps) {
  return (
    <div className={`${className}`}>
      <div className="p-4 border border-gray-200 rounded-lg bg-white">
        <div className="flex items-center space-x-2 mb-4">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">Card Information</h3>
        </div>
        
        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              disabled={disabled}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
            />
          </div>

          {/* Cardholder Name */}
          {!compact && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                disabled={disabled}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
            </div>
          )}

          {/* Expiry and CVV */}
          <div className={compact ? "grid grid-cols-2 gap-3" : "grid grid-cols-3 gap-3"}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                disabled={disabled}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                disabled={disabled}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
            </div>
            {!compact && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  placeholder="12345"
                  disabled={disabled}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
