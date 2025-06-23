
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreditCard, Building, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
  onPaymentSuccess: () => void;
}

const PaymentModal = ({ isOpen, onOpenChange, totalAmount, onPaymentSuccess }: PaymentModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState('stripe');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    bankAccount: '',
    routingNumber: '',
    mpesaNumber: ''
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing
    setTimeout(() => {
      onPaymentSuccess();
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            Total: ${totalAmount.toFixed(2)} - Choose your preferred payment method
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handlePayment} className="space-y-6">
          <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="stripe" id="stripe" />
                <Label htmlFor="stripe" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5" />
                  <span>Credit/Debit Card (Stripe)</span>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <Building className="h-5 w-5" />
                  <span>Bank Transfer</span>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="mpesa" id="mpesa" />
                <Label htmlFor="mpesa" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5" />
                  <span>M-Pesa</span>
                </Label>
              </div>
            </div>
          </RadioGroup>

          {selectedMethod === 'stripe' && (
            <Card>
              <CardHeader>
                <CardTitle>Card Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={paymentData.cardName}
                    onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === 'bank' && (
            <Card>
              <CardHeader>
                <CardTitle>Bank Transfer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="bankAccount">Account Number</Label>
                  <Input
                    id="bankAccount"
                    value={paymentData.bankAccount}
                    onChange={(e) => setPaymentData({ ...paymentData, bankAccount: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="routingNumber">Routing Number</Label>
                  <Input
                    id="routingNumber"
                    value={paymentData.routingNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, routingNumber: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === 'mpesa' && (
            <Card>
              <CardHeader>
                <CardTitle>M-Pesa Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="mpesaNumber">M-Pesa Number</Label>
                  <Input
                    id="mpesaNumber"
                    placeholder="+254 700 000 000"
                    value={paymentData.mpesaNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, mpesaNumber: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Pay ${totalAmount.toFixed(2)}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
