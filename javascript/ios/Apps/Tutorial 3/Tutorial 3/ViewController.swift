import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBOutlet weak var scene1Label: UILabel!
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! Scene2
        destination.labelText = "Welcome To Scene 2!"
    }
    
    @IBAction func returned(segue: UIStoryboardSegue){
        scene1Label.text = "Returned From Scene 2"
    }
}

