package HashMap;

import java.util.*;

public class HasPalindromPermutation {

    public static boolean hasPalindromePermutation(String theString) {

        char[] array = theString.toCharArray();
        HashSet<Character> chars = new HashSet<>();

        for(char c : array){
            if(!chars.contains(c)){
                chars.add(c);
            } else {
                chars.remove(c);
            }
        }


        return false;
    }

    public static void main(String[] args){

    }

}
