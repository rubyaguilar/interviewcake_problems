package HashMap;

import com.sun.jdi.IntegerValue;

import java.util.HashSet;
import java.util.Set;

public class CanTwoMoviesFillFlight {
    public static boolean canTwoMoviesFillFlight(int[] movieLengths, int flightLength) {

        Set<Integer> movieLengthsSeen = new HashSet<>();
        movieLengths = sort(movieLengths); //could also just get the minimum

        if(movieLengths.length > 0){
            for(int i = 0; i < movieLengths.length; i++){
                movieLengthsSeen.add(movieLengths[i]); //
            }
            int timeLeft = flightLength - movieLengths[0];
            boolean exists = movieLengthsSeen.contains(timeLeft);

            return exists;
        } else {
            return false;
        }
    }

    private static int[] sort(int[] movieLengths) {
            boolean isSorted = false;
            while(!isSorted){
                isSorted = true;
                for(int i = 0; i < movieLengths.length - 1; i ++)
                    if(movieLengths[i+1] < movieLengths[i]){
                        int temp = movieLengths[i];
                        movieLengths[i] = movieLengths[i+1];
                        movieLengths[i+1] = temp;
                        isSorted = false;
                    }
            }
            return movieLengths;
    }

    public static void main(String[] args){

            System.out.print( canTwoMoviesFillFlight(new int[] {3, 8}, 6));


        }
}
