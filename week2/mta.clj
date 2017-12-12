(def lines
  {"N" ["Times Square" "34th" "28th" "23rd" "Union Square" "8th"]
   "L" ["8th" "6th" "Union Square" "3rd" "1st"]
   "6" ["Grand Central" "33rd" "28th" "23rd" "Union Square" "Astor Place"]})

(def transfer-station "Union Square")

(defn get-leg [line-name start-station end-station]
  "Given a line name, start name and end name, return a vector of stations on that trip"
  (let [line        (lines line-name)
        start-index (.indexOf line start-station)
        end-index   (.indexOf line end-station)]
  (if (< start-index end-index)
    (subvec line start-index (+ end-index 1))
    (reverse (subvec line end-index (+ start-index 1))))))

(defn plan-trip
  "Calculate trip details for either a single-line trip or a multi-line trip, based on argument count, and print journey"
  ([line start-station end-station] (plan-trip line start-station line end-station))  ; single-line signature (3 args)
  ([start-line start-station end-line end-station]  ; multi-line signature (4 args)
    (if (= start-line end-line)
      (print-trip (get-leg start-line start-station end-station))
      (let [combined-stations (into ; concat both legs
                                (get-leg start-line start-station transfer-station)
                                (rest (get-leg end-line transfer-station end-station)))]
        (print-trip transfer-station end-line (count combined-stations) combined-stations)))))

(defn print-trip
  "Given a list of stations, print one station for each line; for multi-line trips, extra arg indicates transfer point; also report total stops"
  ([stations] (print-trip false false (count stations) stations))  ; single-line signature, calls version below
  ([transfer-name end-line count stations]
  (if (seq stations)
    (do (if (= (first stations) transfer-name)
          (println "Transfer at" transfer-name "to" end-line "line")
          (println (first stations)))
        (recur transfer-name end-line count (rest stations)))
    (println "Total stops:" count))))


(plan-trip "N" "34th" "8th")
; 34th
; 28th
; 23rd
; Union Square
; 8th
; Total stops:  5

(plan-trip "N" "Times Square" "6" "Grand Central")
; Times Square
; 34th
; 28th
; 23rd
; Transfer at Union Square to 6 line
; 23rd
; 28th
; 33rd
; Grand Central
; Total stops:  9
