## Create this as a backup


## Create a temp to store all csv's in directory
temp = list.files(pattern="*.txt")
## Loop through each one in the temp, and assign a number.
for (i in 1:length(temp)) assign(temp[i], read.csv(temp[i]))

## Use library readr
library(readr)
## Import Season One of Twin Peaks
S1e1 <- read_delim("S1e1.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e2 <- read_delim("S1e2.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e3 <- read_delim("S1e3.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e4 <- read_delim("S1e4.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e5 <- read_delim("S1e5.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e6 <- read_delim("S1e6.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e7 <- read_delim("S1e7.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)
S1e8 <- read_delim("S1e8.txt", ";", escape_double = FALSE, 
                   col_names = FALSE, trim_ws = TRUE)

write.csv(S1e1, file = "s1e1-mod.txt")
write.csv(S1e2, file = "s1e2-mod.txt")
write.csv(S1e3, file = "s1e3-mod.txt")
write.csv(S1e4, file = "s1e4-mod.txt")
write.csv(S1e5, file = "s1e5-mod.txt")
write.csv(S1e6, file = "s1e6-mod.txt")
write.csv(S1e7, file = "s1e7-mod.txt")
write.csv(S1e8, file = "s1e8-mod.txt")