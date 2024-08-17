#!/usr/bin/env python3
import asyncio
import time
from 1-concurrent_coroutines import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the average runtime of wait_n(n, max_delay)."""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    total_time = end - start
    return total_time / n
