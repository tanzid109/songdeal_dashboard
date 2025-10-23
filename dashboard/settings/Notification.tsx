"use client";
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

export default function NotificationSettings() {
    const [settings, setSettings] = useState({
        notification: false,
        productUpdates: true,
        checkoutProduct: true
    });

    const handleToggle = (key: 'notification' | 'productUpdates' | 'checkoutProduct') => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        console.log('Settings saved:', settings);
        // Add your save logic here
    };

    return (
        <div className="w-full shadow-blue-400 shadow-md bg-white mt-5 rounded-2xl max-w-2xl p-8">
            <div className="space-y-6">
                {/* Notification */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">Notification</span>
                        <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    <Switch
                        checked={settings.notification}
                        onCheckedChange={() => handleToggle('notification')}
                    />
                </div>

                {/* Product updates */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">Product updates</span>
                        <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    <Switch
                        checked={settings.productUpdates}
                        onCheckedChange={() => handleToggle('productUpdates')}
                    />
                </div>

                {/* Checkout Product */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">Checkout Product</span>
                        <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    <Switch
                        checked={settings.checkoutProduct}
                        onCheckedChange={() => handleToggle('checkoutProduct')}
                    />
                </div>

                {/* Save Button */}
                <div className="pt-4">
                    <Button
                        onClick={handleSave}
                        className="w-full ">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}