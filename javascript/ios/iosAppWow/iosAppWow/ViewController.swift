//
//  ViewController.swift
//  iosAppWow
//
//  Created by Baber M (FCES) on 14/01/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func btnWasPressed(_ sender: Any) {
        if (onOffLabel.text == "This is on")
        {
            onOffLabel.text = "This is off"
        } else {
            onOffLabel.text = "This is on"
        }
    }
    
    @IBOutlet weak var onOffLabel: UILabel!
    // Stuff here for label
    
    @IBAction func doneEditing(_ sender: Any) {
        waiting.text = keyin.text
    }
    
    @IBOutlet weak var waiting: UILabel!
    
    @IBOutlet weak var keyin: UITextField!
    // END HERE
}
    


