$("#scrollChart").append.html(`
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
  {
  "symbols": [
    {
        "description": "",
        "proName": "BINANCE:SOLUSDT"
    },
    {
        "description": "",
        "proName": "BINANCE:BTCUSDT"
    },
    {
        "description": "",
        "proName": "BINANCE:GRTUSDT"
    },
    {
        "description": "",
        "proName": "BINANCE:BNBUSDT"
    },
    {
        "description": "",
        "proName": "BINANCE:AXSUSDT"
    },
    {
        "description": "",
        "proName": "BITFINEX:BTCUSD"
    },
    {
        "description": "",
        "proName": "BINANCE:DOTUSDT"
    },
    {
        "description": "",
        "proName": "BINANCE:ICPUSDT"
    }
    ],
  "colorTheme": "light",
  "isTransparent": false,
  "showSymbolLogo": true,
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
`);