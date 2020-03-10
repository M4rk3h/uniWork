//
//  ViewController.swift
//  GameBase
//
//  Created by Baber M (FCES) on 18/02/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // for loop to set images to nothing.
        for i in 1...9{
            let button = view.viewWithTag(i) as! UIButton
            button.setImage(nil, for : UIControl.State())
        }
    }
    
    @IBOutlet weak var output: UILabel!
    // Input Text
    @IBOutlet weak var input: UITextField!
    // Save function
    @IBAction func save(_ sender: Any) {
        output.text = input.text
        UserDefaults.standard.set(input.text, forKey: "myName")
        input.text=""
    }
    
    override func viewDidAppear(_ animated: Bool) {
        if let x = UserDefaults.standard.object(forKey: "myName") as? String{
            output.text = x
        }
    }
    
    // Create var for activePlayer
    var activePlayer = 1
    // Create array for gameStates
    var gameState = [0,0,0,0,0,0,0,0,0]
    // Array of winning bois
    let winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    // Draw
    var turnCount:Int = 0;
       
    // Var for gameActive
    var gameActive = true;
    
    
    // Reset Game Btn
    @IBAction func reset(_ sender: UIButton) {
        output.text = "Game Reset"
        viewDidLoad()
        activePlayer = 1;
        gameState = [0,0,0,0,0,0,0,0,0];
        gameActive = true;
        turnCount = 0;
        output.text = " ";
    }
    
    // Function to alternate players & images
    @IBAction func action(_ sender: UIButton){
        if (gameActive){
        if (gameState[sender.tag-1] == 0) {
            gameState[sender.tag-1] = activePlayer
            if (activePlayer == 1){
                output.text = "Circles turn"
                turnCount = turnCount + 1
                print(turnCount)
                sender.setImage(UIImage(named: "cross.png"), for: UIControl.State())
                activePlayer = 2
        } else {
            output.text = "Cross' turn"
            sender.setImage(UIImage(named: "circle.png"), for: UIControl.State())
            activePlayer = 1
            turnCount = turnCount + 1
            print(turnCount)
            }
            for combination in winningCombinations {
                if (gameState[combination[0]] != 0 && gameState[combination[0]] == gameState[combination[1]] && gameState[combination[1]] == gameState[combination[2]])
                {
                    gameActive = false
                    if (gameState[combination[0]] == 1){
                        output.text = "Cross' Wins"
                        // Button Hidden
                        // reset.isHidden = false;
                    } else {
                        output.text = "Circles Wins"
                        }
                    }
                }
            }
        }
    }
}

