# This package is required for Accessing APIS (HTTP or HTTPS URLS from Web)
library(httr)
#This package exposes some additional functions to convert json/text to data frame
library(rlist)
#This package exposes some additional functions to convert json/text to data frame
library(jsonlite)
#This library is used to manipulate data
library(dplyr)
library(smooth)
library(ggplot2)
symbols= c('AAPL','ABBV','ABT','ACN','AGN','AIG','ALL','AMGN','AMZN','AXP','BA','BAC','BIIB','BK','BLK','BMY','C','CAT','CELG','CL','CMCSA','COF','COP','COST','CSCO','CVS','CVX','DD','DHR','DIS','DOW','DUK','EMC','EMR','EXC','F','FB','FDX','FOX','FOXA','GD','GE','GILD','GM','GOOG','GOOGL','GS','HAL','HD','HON','IBM','INTC','JNJ','JPM','KMI','KO','LLY','LMT','LOW','MA','MCD','MDLZ','MDT','MET','MMM','MO','MON','MRK','MS','MSFT','NEE','NKE','ORCL','OXY','PEP','PFE','PG','PM','PYPL','QCOM','RTN','SBUX','SLB','SO','SPG','T','TGT','TXN','UNH','UNP','UPS','USB','USD','UTX','V','VZ','WBA','WFC'
          
)
dati_totali<-data.frame(1:14)
SMA_3<-data.frame(1:14)
SMA_7<-data.frame(1:14)
for(s in symbols){

  r<- GET(paste('https://api.marketstack.com/v1/tickers/', s, '/eod', sep=''),add_headers(Name = 'access_key',Name='limit'),query=list(access_key='b7f513ecf8b91aa4dc345df69bf55a3d',limit=14))
  dati<-fromJSON(content(r,as="text"))
  dati_totali[s]=rev(dati[["data"]][["eod"]][["adj_close"]])
  
SMA_3[s]<-sma(ts(dati_totali[s]),order = 3,silent = FALSE)$fitted
SMA_7[s]<-sma(ts(dati_totali[s]),order = 7,silent = FALSE)$fitted
}
list_buy_sell<-buy_sell(SMA_3,SMA_7,dati_totali)



buy_sell <- function(SMA_Short, SMA_Long, dataset) {
  d <- list()
  
  last <- 14
  for (s in symbols) {
    if (SMA_Short[last,s] > SMA_Long[last,s]) {
      if (SMA_Short[last-1,s] < SMA_Long[last-1,s]) {
        # buy =1
        d[[s]]<- list(1,dataset[last,s])
      } else {
        d[[s]] <- list(0, NA)
      }
    } else if (SMA_Short[last,s] < SMA_Long[last,s]) {
      if (SMA_Short[last-1,s] > SMA_Long[last-1,s]) {
        # sell =-1
        d[[s]] <- list(-1, dataset[last,s])
      } else {
        d[[s]] <- list(0, NA)
      }
    } else {
      d[[s]] <- list(0, NA)
    }
  }
  return(d)
}



