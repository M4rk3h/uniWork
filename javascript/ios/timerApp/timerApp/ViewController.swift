//
//  ViewController.swift
//  timerApp
//
//  Created by Baber M (FCES) on 14/01/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    // Timer
    var timer = Timer()
    // Counter
    var counter = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBOutlet weak var labelCounter: UILabel!
    
    @objc func updateCounter(){
        counter = counter + 1
        labelCounter.text = String(counter)
    }
    
    @IBAction func startTimer(_ sender: Any) {
        counter = 0
        labelCounter.text = String(counter)
        timer = Timer.scheduledTimer(timeInterval: 1,
                                         target:self,
                                         selector:#selector(ViewController.updateCounter),
                                         userInfo: nil,
                                         repeats: true)
        
    }
    
    @IBAction func resetButton(_ sender: Any) {
        counter = 0
        labelCounter.text = String(counter)
    }
    
    @IBAction func startStopButton(_ sender: Any) {
        if (startStopButton.text = "start"){
            // Start the timer
        } else {
            // Stop the timer
        }
    }
}
