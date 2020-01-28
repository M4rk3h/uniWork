//
//  ViewController.swift
//  SeguesBaby
//
//  Created by Baber M (FCES) on 28/01/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    

    @IBOutlet weak var scene1Label: UILabel!
        
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! Scene2ViewController
        destination.labelText = "Arrived from scene 1"
    }
    
    @IBAction func returned(segue: UIStoryboardSegue){
        scene1Label.text = "Returned from Scene 2"
    }
}

