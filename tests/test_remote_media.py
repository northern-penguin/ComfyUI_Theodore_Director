import pytest

from theodore_director.remote_media import validate_runninghub_result_url


def test_runninghub_result_url_accepts_documented_cdn_hosts():
    assert validate_runninghub_result_url("https://rh-images.example.myqcloud.com/output/demo.mp4").endswith("demo.mp4")
    assert validate_runninghub_result_url("https://rh-images.xiaoyaoyou.com/output/demo.mp4").endswith("demo.mp4")


@pytest.mark.parametrize("value", [
    "http://rh-images.xiaoyaoyou.com/output/demo.mp4",
    "https://127.0.0.1/demo.mp4",
    "https://example.com/demo.mp4",
    "file:///tmp/demo.mp4",
])
def test_runninghub_result_url_rejects_untrusted_locations(value):
    with pytest.raises(ValueError):
        validate_runninghub_result_url(value)
