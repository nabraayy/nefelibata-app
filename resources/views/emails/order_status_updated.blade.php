<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Estado del Pedido</title>
</head>
<body>
    <h2>Hola {{ $order->user->name }},</h2>
    <p>El estado de tu pedido #{{ $order->id }} ha cambiado a <strong>{{ ucfirst($order->status) }}</strong>.</p>
    <p>Total: {{ number_format($order->total, 2) }} €</p>
    <p>Gracias por confiar en nosotros.</p>
</body>
</html>
