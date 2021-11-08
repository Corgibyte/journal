import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import {Journal, Entry} from './journal.js';

$(document).ready(function() {
  const testJournal = new Journal();
  const testEntry = new Entry("TestTitle", "TestBody");
  testJournal.addEntry(testEntry);
  console.log(testEntry.numberOfVowels());
  console.log(testEntry.numberOfConsonants());
});