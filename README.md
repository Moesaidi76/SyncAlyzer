# SyncAlyzer

SyncAlyzer is in-browser stock portfolio manager that you can deploy anywhere.

* [Getting Started](#getting-started)
* [Importing Your Portfolio](#importing-your-portfolio)
  * [Data Format](#data-format)
  * [Google Finance Portfolios](#google-finance-portfolios)
* [Exporting Your Portfolio](#exporting-your-portfolio)
* [Data Privacy](#data-privacy)
* [How to Build](#how-to-build)

## Getting Started

1. Create an [IEX Cloud](https://iexcloud.io/) account if you don't already have one
2. Create an IEX API Token on the [API Tokens](https://iexcloud.io/console/tokens) section of the console
3. Copy the "publishable" token from the API Token console page
4. Open "Settings" in the upper right
5. Past the "publishable" API token and click "Save"
6. Start creating your portfolio!

## Importing Your Portfolio

If you have a spreadsheet (.csv) file containting transactions in your portfolio, you can import the
entire file at once in Finance!.

1. Click the "Import Portfolio" link in the upper right-ish area of any page
2. Select your portfolio file
3. Click "Open"

### Data Format

Your portfolio CSV file is expected to have the following columns:

```
Symbol,Name,Type,Date,Shares,Price,'Cash value',Commission,Notes
```

the values should be of the following types:

```
{
  'Cash value': ?number,
  Commission: number,
  Date: ?string,
  Name: ?string,
  Notes: ?string,
  Price: number,
  Shares: number,
  Symbol: string,
  Type: 'Buy' | 'Sell',
}
```

Other formats are currently not supported, and SyncAylyzer! might fall apart if you try to use another
format.



## Exporting your portfolio

1. Click the "Download to spreadsheet" button in the upper right-ish area of any page.
2. The file will be called _"My Portfolio.csv"_ and be in the data format described in the
   [Importing Your Portfolio](#importing-your-portfolio) section.

## Data Privacy

SyncAlyzer doesn't collect or store any of your data. 

### What does SyncAlyzer do with my transaction data?

Your IEX API key, transaction data, and which symbols you're watching are stored entirely in your
browser (using [local storage][0]). Transaction data is never sent anywhere; it never leaves your
computer.

### What data of mine *does* leave my computer?

In order to see the value of your portfolio, a list of the symbols in your portfolio is sent to
[IEX][1] to get the latest quotes for each symbol. *None* of your transaction data is sent to IEX or
to anyone else, only a list of the symbols leaves your computer.

For example, if your portfolio looked like the following:

```
{
  transactions: [
    {symbol: 'GM', price: 100, shares: 100},
    {symbol: 'GM', price: 150, shares: 100},
    {symbol: 'F', price: 50, shares: 100},
    {symbol: 'F', price: 100, shares: 1000},
  ]
}
```

the following data would be sent to IEX:

```
// Note: your publishable IEX API key is necessarily used in every API request to IEX
PUBLISHABLE_IEX_API_KEY
['F', 'GM']
```

That's it. There's no tracking, no advertisements, and no other API requests.

## App status 
- App is still in the work. User log in and log out is not completely operational. 

## depoloyment 
- The Heroku deployement is not available yet. Still hanlding some pugs with the deployment and should have an updated link from Heroku soon. 
- 
