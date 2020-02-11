//
//  ViewController.swift
//  ListView
//
//  Created by Baber M (FCES) on 11/02/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    let list = ["dog1","dog2","dog3","dog4"]
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return(list.count)
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! ViewControllerTableViewCell
        
        tableView.rowHeight = 100
        
        //cell.myImage.image = UIImage(named: (list[indexPath.row] + ".jpeg"))
        
        //cell.myLabel.text = list[indexPath.row]
        
        return(cell)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
}
