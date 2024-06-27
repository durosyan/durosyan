workflow ParallelSweep { 
	foreach -parallel -throttlelimit 4 ($i in 1..255) {ping -n 1 -w 100 10.0.0.$i}
};

ParallelSweep | Select-String ttl