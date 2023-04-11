import unittest
from binary_search import binarySearch

class BinarySearchTest(unittest.TestCase):

    def setUp(self):
        self.result = binarySearch([1,2,3,4,5,6], 3)
        self.result2 = binarySearch([1,2,3,4,5,6], 6)
        self.result3 = binarySearch([1,2,3,4,5,6], 9)

    def test_return_type(self):
        self.assertEqual(type(self.result), int)

    def test_search_result_found(self):
        self.assertEqual(self.result, 2)

    def test_search_result_found_last(self):
        self.assertEqual(self.result2, 5)

    def test_search_result_not_found(self):
        self.assertEqual(self.result3, None)
