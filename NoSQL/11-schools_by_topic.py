#!/usr/bin/env python3
"""A module to find schools by a specific topic in MongoDB."""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.
    """
    return list(mongo_collection.find({"topics": topic}))