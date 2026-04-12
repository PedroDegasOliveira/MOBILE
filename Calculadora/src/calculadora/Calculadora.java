/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package calculadora;

import javax.swing.JOptionPane;
import java.util.Scanner;

/**
 *
 * @author Aluno CA
 */
public class Calculadora {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        calc calcu = new calc();
        Scanner scanner = new Scanner(System.in);
        JOptionPane.showInputDialog("digite o primeiro numero");
        float numero1 = scanner.nextFloat();
        JOptionPane.showInputDialog("digite o primeiro numero");
        float numero2 = scanner.nextFloat();
        JOptionPane.showInputDialog("Digite a operação desejada: "
                + "\n Soma "
                + "\n Subtracao "
                + "\n Multiplicacao" 
                + "\n Divisao ");
        String escolha = scanner.nextLine();
        
        switch(escolha){
            case "Soma":
                 System.out.println("soma: " + calcu.soma(numero1, numero2));
                 break;
            case "Subtracao":
                 System.out.println("soma: " + calcu.subtracao(numero1, numero2));
                  break;
            case "Multiplicacao":
                 System.out.println("soma: " + calcu.multiplica(numero1, numero2));
                 break;
            case "Divisao": 
                 System.out.println("soma: " + calcu.divisao(numero1, numero2));
                 break;
            default:
                System.out.println("Digite um número que condiz com a operação");
        }
    }
    
}
