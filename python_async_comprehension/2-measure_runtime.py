#!/usr/bin/env python3
"""
This module provides a coroutine function to measure the execution time of running multiple asynchronous comprehensions in parallel.
"""

import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and measures the total runtime.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()

	await asyncio.gather(
	    async_comprehension(),
		async_comprehension(),
		async_comprehension(),
		async_comprehension()
	)

    end_time = time.perf_counter()
    return end_time - start_time
