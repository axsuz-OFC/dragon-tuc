// ===== Dragon TUC Packs =====
const PACKS = [
    // Weekly
    { id: 'w1', name: 'Weekly Lite', amount: '220 💎', price: 'Rs. 450', badge: 'weekly', image: 'images/packs/weekly.jpg' },
    { id: 'w2', name: 'Weekly', amount: '440 💎', price: 'Rs. 850', badge: 'weekly', image: 'images/packs/weekly.jpg' },
    { id: 'w3', name: 'Weekly Plus', amount: '660 💎', price: 'Rs. 1250', badge: 'weekly', image: 'images/packs/weekly.jpg' },
    
    // Monthly
    { id: 'm1', name: 'Monthly Lite', amount: '880 💎', price: 'Rs. 1650', badge: '', image: 'images/packs/monthly.jpg' },
    { id: 'm2', name: 'Monthly', amount: '1320 💎', price: 'Rs. 2450', badge: '', image: 'images/packs/monthly.jpg' },
    { id: 'm3', name: 'Monthly Plus', amount: '1980 💎', price: 'Rs. 3650', badge: '', image: 'images/packs/monthly.jpg' },
    
    // Level Up
    { id: 'l1', name: 'Level Up Lite', amount: '440 💎', price: 'Rs. 850', badge: '', image: 'images/packs/levelup.jpg' },
    { id: 'l2', name: 'Level Up', amount: '880 💎', price: 'Rs. 1650', badge: '', image: 'images/packs/levelup.jpg' },
    { id: 'l3', name: 'Level Up Pro', amount: '1320 💎', price: 'Rs. 2450', badge: '', image: 'images/packs/levelup.jpg' },
    
    // VIP
    { id: 'v1', name: 'VIP Lite', amount: '1040 💎', price: 'Rs. 1950', badge: 'vip', image: 'images/packs/vip.jpg' },
    { id: 'v2', name: 'VIP', amount: '1560 💎', price: 'Rs. 2850', badge: 'vip', image: 'images/packs/vip.jpg' },
    { id: 'v3', name: 'VIP Elite', amount: '2080 💎', price: 'Rs. 3750', badge: 'vip', image: 'images/packs/vip.jpg' }
];

// ===== Storage =====
const DragonStorage = {
    getOrders: () => JSON.parse(localStorage.getItem('dragontuc_orders') || '[]'),
    saveOrders: (orders) => localStorage.setItem('dragontuc_orders', JSON.stringify(orders)),
    
    addOrder: (packId, packName, ffId) => {
        const orders = DragonStorage.getOrders();
        const order = {
            id: Date.now(),
            packId: packId,
            packName: packName,
            ffId: ffId,
            createdAt: new Date().toISOString()
        };
        orders.unshift(order);
        DragonStorage.saveOrders(orders);
        return order;
    },
    
    getCountForPack: (packId) => {
        const orders = DragonStorage.getOrders();
        return orders.filter(o => o.packId === packId).length;
    }
};