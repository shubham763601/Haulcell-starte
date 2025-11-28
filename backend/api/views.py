# /backend/api/views.py
from django.http import JsonResponse

def products_list(request):
    # static sample product list — replace with DB later
    products = [
        {"id": 1, "name": "Industrial Pallet (100 units)", "price": "₹12,000", "description": "High-strength pallet for heavy loads"},
        {"id": 2, "name": "Cold-Chain Container", "price": "₹45,000", "description": "Temperature controlled container"},
        {"id": 3, "name": "Express Slot (per shipment)", "price": "₹2,500", "description": "Priority express shipping"},
        {"id": 4, "name": "Freight Insurance Pack", "price": "₹1,200", "description": "Comprehensive cargo insurance"}
    ]
    return JsonResponse({"products": products})