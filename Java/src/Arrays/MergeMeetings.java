package Arrays;

import java.util.ArrayList;
import java.util.Arrays;

public class MergeMeetings {

    private static int[] mergeArrays(int[] myArray, int[] alicesArray) {

        ArrayList<Integer> list = new ArrayList<Integer>();

        for(int i = 0; i < myArray.length; i++){

        }

        int[] arr = list.stream().mapToInt(i -> i).toArray();

        return arr;
    }

    public static void main(String[] args) {

        int[] myArray = new int[] {3, 4, 6, 10, 11, 15};
        int[] alicesArray = new int[] {1, 5, 8, 12, 14, 19};

       System.out.print(Arrays.toString(mergeArrays(myArray,alicesArray)));


    }


}
